exports.template = {
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
                      "url": "http://localhost:3004/api/talkabot/bus",
                      "method": "get"
                    }
                  },
                  "type": "FORM"
                }
              ],
              "options": {
                "value": "Consulta",
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
        "options": {
          "title": "Consulte os Horários dos Ônibus de BH"
        },
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
                "url": "http://localhost:3004/api/talkabot/bus",
                "method": "get"
              }
            },
            "type": "FORM"
          }
        ],
        "type": "CONTAINER"
      },
      "type": "DEFAULT"
    }
  },
  "type": "CONNECT_RESPONSE"
}