exports.template = 
{
  "body": {
    "layout": {
      "navbarComponent": {
        "components": [
          {
            "components": [
              {
                "components": [
                  {
                    "type": "INPUT",
                    "options": {
                      "type": "TEXT",
                      "name": "refBus",
                      "label": "Informe o número do ônibus"
                    }
                  }
                ],
                "options": {
                  "submitValue": "Consultar",
                  "enctype": "multipart/form-data",
                  "request": {
                    "event": "CONSULTAR",
                    "url": "http://busbhapi.talkabot.com.br/api/talkabot/bus",
                    "method": "get"
                  }
                },
                "type": "FORM"
              }
            ],
            "options": {
              "value": "Nova Consulta",
              "modalComponent": {
                "options": {
                  "title": "Consultar Horário"
                },
                "type": "MODAL"
              }
            },
            "type": "COMMAND"
          }
        ],
        "type": "NAVBAR"
      },
      "containerComponent": {
        "components": [
          {
            "options": {
              "value": "Não foi encontrado o horário do ônibus @refBus."
            },
            "type": "TEXT"
          }
        ],
        "type": "CONTAINER"
      },
      "type": "DEFAULT"
    }
  },
  "type": "API_RESPONSE"
}