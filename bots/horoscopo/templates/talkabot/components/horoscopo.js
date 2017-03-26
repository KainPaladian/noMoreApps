exports.template = 
{
"options": {
  "headerComponent": {
    "components": [
      {
        "options": {
          "horizontalPosition": "center",
          "label": "",
          "src": "@img",
          "width": "200px",
          "height": "200px"
        },
        "type": "IMAGE"
      },
      {
        "options": {
          "richText": true,
          "value": "Nascido em: <b>@dateSigno</b>",
          "marginBottom":"10px"
        },
        "type": "TEXT"
      },
      {
        "options": {
          "richText": true,
          "value": "@description"
        },
        "type": "TEXT"
      }
    ],
    "options": {
      "innerComponents": [
        {
          "options": {
            "horizontalPosition": "center",
            "label": "",
            "src": "@img",
            "width": "90px",
            "height": "90px"
          },
          "type": "IMAGE"
        },
        {
          "options": {
            "value": "@signo"
          },
          "type": "TEXT"
        },
        {
          "options": {
            "richText": true,
            "value": "<b>@dateSigno</b>"
          },
          "type": "TEXT"
        },
      ],
      "modalComponent": {
        "options": {
          "title": "@signo"
        },
        "type": "MODAL"
      },
      "type": "link"
    },
    "type": "COMMAND"
  }
},
"type": "THUMBNAIL"
}