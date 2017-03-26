exports.template = {
  "body": {
    "layout": {
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
                "url": "http://busbhapi.talkabot.com.br/api/talkabot/bus",
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