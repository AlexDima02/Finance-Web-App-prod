const accountsSchema = {

    'title': 'account schema',
    'description': 'This is my database',
    'version': 0,
    'type': 'object',
    "primaryKey": "id",
    'properties': {
        'id': {
            'type': 'string',
            'primary': true,
            "maxLength": 100,
        },
        'text': {
            'type': 'string',
            'default': 'Alex'
        },
        'createdAt': {
            'type': 'string',
            'format': 'date-time'      
        },
        'updatedAt': {
            'type': 'string',
            'format': 'date-time'
        },
        'name': {
            
            'type': 'string'

        },
        'accountType': {
            
            'type': 'string'
        
        },
        'ammounts': {

            'type': 'number'

        },
        'currency': {

            'type': 'string'

        }
    },
    
    'required': ['text', 'createdAt'],
    additionalProperties: true


}

export default accountsSchema;