import json
import boto3
import botocore


class TodoTask():
    def __init__(self):
        self._db = boto3.client('dynamodb')
        self.table_name = "todolist"
        pass

    def add_task(self, formData):
        try:
            response = self._db.put_item(
                TableName=self.table_name,
                Item={
                    'task_status': {
                        'BOOL': formData.task_status
                    },
                    'task_uuid': {
                        'S': formData.task_uuid
                    },
                    'task_desc': {
                        'S': formData.task_desc
                    },
                    'task_date': {
                        'S': formData.task_date
                    },
                    'task_time': {
                        'S': formData.task_time
                    },
                }
            )
            print("add_task response: {}".format(response))
        except botocore.exceptions.ClientError as err:
            print("Error in add_task: {}".format(err))

    def delete_task(self):
        try:
            response = self._db.delete_item(
                TableName=self.table_name,
                Key={
                    'task_date': {
                        'S': '2019-08-27'
                    },
                    'task_desc': {
                        'S': 'this is a sample task'
                    },
                }
            )
            print("delete_task response: {}".format(response))
        except botocore.exceptions.ClientError as err:
            print("Error in delete_task: {}".format(err))

    def undo_task(self):
        try:
            get_the_item = self._db.get_item(
                TableName=self.table_name,
                Key={
                    'task_date': {
                        'S': '2019-08-27'
                    },
                    'task_desc': {
                        'S': 'this is a sample task'
                    },
                }
            )
            update_the_item = self._db.put_item(
                TableName=self.table_name,
                Item={
                    'status': {
                        'BOOL': 'false'
                    },
                    'task_desc': {
                        'S': get_the_item
                    },
                    'task_date': {
                        'S': get_the_item
                    },
                    'task_time': {
                        'S': get_the_item
                    },
                }
            )
            print("undo_task response: {}".format(update_the_item))
        except botocore.exceptions.ClientError as err:
            print("Error in undo_task: {}".format(err))

    def get_all_items(self):
        try:
            response = self._db.query(
                TableName=self.table_name,
                # ExpressionAttributeNames={
                #     'TDS': 'task_desc',
                #     'TDA': 'task_date',
                # },
                ExpressionAttributeValues={
                    ':d': {
                        'S': '2019-08-27',
                    },
                },
                KeyConditionExpression='task_date = :d',
                # ProjectionExpression='#TDA, #TDS',
            )
            print("response: {}".format(response))
        except botocore.exceptions.ClientError as err:
            print("Error in get_all_items: {}".format(err))


def lambda_handler(event, context):
    _todo = TodoTask()
    formData = event

    if formData["uri"] is "home":
        _todo.add_task(formData)
    # if formData["uri"] is "incomplete":
    #     pass


"""{
    "uri" : "$input.params('uri')",
    "when" : "$input.params('when')",
}"""
