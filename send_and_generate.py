import os
import requests
import json
import base64
import argparse

parser = argparse.ArgumentParser()
parser.add_argument("project_id", help="The name of the project in Allure", type=str)
parser.add_argument("allure_username", nargs='?', default="admin", help="Allure Username", type=str)
parser.add_argument("allure_password", nargs='?', default="Password123", help="Allure Password", type=str)
parser.add_argument("allure_server", nargs='?', default="http://localhost:5050", help="Allure Server", type=str)
parser.add_argument("allure_results_path", nargs='?', default="/test_results", help="Allure Results Path (Where are the test result (json) files are)", type=str)
parser.add_argument("allure_execution_name", nargs='?', default="Script", help="Allure Results Path (Where are the test result (json) files are)", type=str)
parser.add_argument("allure_execution_from", nargs='?', default="bmbmmbmbmbmb", help="The name of the site/system/area that generated the test results", type=str)
parser.add_argument("allure_execution_type", nargs='?', default="bamboo", help="Type of CI/CD system used. Options are: bamboo, github, jenkins, gitlab, teamcity", type=str)
args = parser.parse_args()

# This directory is where you have all your results locally, generally named as `allure-results`
allure_results_directory = args.allure_results_path  # '/allure-results-example'

# This url is where the Allure container is deployed. We are using localhost as example
allure_server = args.allure_server  # 'http://localhost:5050'

# Project ID according to existent projects in your Allure container - Check endpoint for project creation >> `[POST]/projects`
project_id = args.project_id  # 'test'

# Set security_user & security_password according to Allure container configuration
security_user = args.allure_username  # 'admin'
security_password = args.allure_password  # 'Password123'

# =======================================================================================================================
# Collect Test Results
# =======================================================================================================================
current_directory = os.path.dirname(os.path.realpath(__file__))
results_directory = current_directory + allure_results_directory
print('RESULTS DIRECTORY PATH: ' + results_directory)

files = os.listdir(results_directory)

print('')
print('Test result files to be processed:')
results = []
for file in files:
    result = {}

    file_path = results_directory + "/" + file
    print(file_path)

    if os.path.isfile(file_path):
        try:
            with open(file_path, "rb") as f:
                content = f.read()
                if content.strip():
                    b64_content = base64.b64encode(content)
                    result['file_name'] = file
                    result['content_base64'] = b64_content.decode('UTF-8')
                    results.append(result)
        finally:
            f.close()

headers = {'Content-type': 'application/json'}
request_body = {
    "results": results
}
json_request_body = json.dumps(request_body)

ssl_verification = True

# =======================================================================================================================
# Login to Allure
# =======================================================================================================================
print("")
print("------------------LOGIN-----------------")
credentials_body = {
    "username": security_user,
    "password": security_password
}
json_credentials_body = json.dumps(credentials_body)

session = requests.Session()
url = f'{allure_server}/allure-docker-service/login'
print(f'URL Used: {url}')
response = session.post(url, headers=headers, data=json_credentials_body, verify=ssl_verification)

print("STATUS CODE:")
print(response.status_code)
print("RESPONSE COOKIES:")
json_prettier_response_body = json.dumps(session.cookies.get_dict(), indent=4, sort_keys=True)
print(json_prettier_response_body)
csrf_access_token = session.cookies['csrf_access_token']
print("CSRF-ACCESS-TOKEN: " + csrf_access_token)

# =======================================================================================================================
# Send Results
# =======================================================================================================================
print("")
print("------------------SEND-RESULTS------------------")
headers['X-CSRF-TOKEN'] = csrf_access_token
url = f'{allure_server}/allure-docker-service/send-results?project_id={project_id}'
print(f'URL Used: {url}')
response = session.post(url, headers=headers, data=json_request_body, verify=ssl_verification)
print(f'STATUS CODE: {response.status_code}')

print("RESPONSE:")
json_response_body = json.loads(response.content)
json_prettier_response_body = json.dumps(json_response_body, indent=4, sort_keys=True)
print(json_prettier_response_body)

# =======================================================================================================================
# Generate Report
# =======================================================================================================================
# If you want to generate reports on demand use the endpoint `GET /generate-report` and disable the Automatic Execution >> `CHECK_RESULTS_EVERY_SECONDS: NONE`
print("")
print("------------------GENERATE-REPORT------------------")
execution_name = args.allure_execution_name
execution_from = args.allure_execution_from
execution_type = args.allure_execution_type

url = f'{allure_server}/allure-docker-service/generate-report?project_id={project_id}&execution_name={execution_name}&execution_from={execution_from}&execution_type={execution_type}'
print(f'URL Used: {url}')
response = session.get(url, headers=headers, verify=ssl_verification)
print(f'STATUS CODE: {response.status_code}')

print("RESPONSE:")
json_response_body = json.loads(response.content)
json_prettier_response_body = json.dumps(json_response_body, indent=4, sort_keys=True)
print(json_prettier_response_body)
print('ALLURE REPORT URL:')
print(json_response_body['data']['report_url'])
