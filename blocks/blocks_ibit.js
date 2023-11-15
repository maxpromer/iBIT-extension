Blockly.defineBlocksWithJsonArray(
[{
    "type": "ibit_motor1",
    "message0": "setMotor %1 Direction %2 Speed %3",
    "args0": [
        {
            "type": "field_dropdown",
            "name": "n",
            "options": [
                [ "1", "M1" ],
                [ "2", "M2" ]
            ]
        },
        {
            "type": "field_dropdown",
            "name": "dir",
            "options": [
                [ "Forward", "FORWARD" ],
                [ "Backward", "BACKWARD" ]
            ]
        },
        {
            "type": "input_value",
            "name": "speed",
            "check": "Number"
        }
    ],
    "inputsInline": true,
    "previousStatement": null,
    "nextStatement": null,
    "colour": "#3498DB",
    "tooltip": "",
    "helpUrl": ""
},
{
    "type": "ibit_motor2",
    "message0": "Motor2 %1 speed1 %2 speed2 %3",
    "args0": [
        {
            "type": "field_dropdown",
            "name": "dir",
            "options": [
                [ "Forward", "FORWARD" ],
                [ "Backward", "BACKWARD" ]
            ]
        },
        {
            "type": "input_value",
            "name": "speed1",
            "check": "Number"
        },
        {
            "type": "input_value",
            "name": "speed2",
            "check": "Number"
        }
    ],
    "inputsInline": true,
    "previousStatement": null,
    "nextStatement": null,
    "colour": "#3498DB",
    "tooltip": "",
    "helpUrl": ""
},
{
    "type": "ibit_turn",
    "message0": "Turn %1 speed %2",
    "args0": [
        {
            "type": "field_dropdown",
            "name": "dir",
            "options": [
                [
                    "Left",
                    "LEFT"
                ],
                [
                    "Right",
                    "RIGHT"
                ]
            ]
        },
        {
            "type": "input_value",
            "name": "speed",
            "check": "Number"
        }
    ],
    "inputsInline": true,
    "previousStatement": null,
    "nextStatement": null,
    "colour": "#3498DB",
    "tooltip": "",
    "helpUrl": ""
},
{
    "type": "ibit_spin",
    "message0": "Spin %1 speed %2",
    "args0": [
        {
            "type": "field_dropdown",
            "name": "dir",
            "options": [
                [
                    "Left",
                    "LEFT"
                ],
                [
                    "Right",
                    "RIGHT"
                ]
            ]
        },
        {
            "type": "input_value",
            "name": "speed",
            "check": "Number"
        }
    ],
    "inputsInline": true,
    "previousStatement": null,
    "nextStatement": null,
    "colour": "#3498DB",
    "tooltip": "",
    "helpUrl": ""
},
{
    "type": "ibit_motor_stop",
    "message0": "Motor Stop",
    "inputsInline": true,
    "previousStatement": null,
    "nextStatement": null,
    "colour": "#3498DB",
    "tooltip": "",
    "helpUrl": ""
},
{
    "type": "ibit_servo",
    "message0": "Servo %1 Degree %2",
    "args0": [
        {
            "type": "field_dropdown",
            "name": "ch",
            "options": [
                [
                    "1",
                    "SV1"
                ],
                [
                    "2",
                    "SV2"
                ]
            ]
        },
        {
            "type": "input_value",
            "name": "angle",
            "check": "Number"
        }
    ],
    "inputsInline": true,
    "previousStatement": null,
    "nextStatement": null,
    "colour": "#3498DB",
    "tooltip": "",
    "helpUrl": ""
},
{
    "type": "ibit_servo_stop",
    "message0": "Servo Stop %1",
    "args0": [
        {
            "type": "field_dropdown",
            "name": "ch",
            "options": [
                [
                    "1",
                    "SV1"
                ],
                [
                    "2",
                    "SV2"
                ]
            ]
        }
    ],
    "inputsInline": true,
    "previousStatement": null,
    "nextStatement": null,
    "colour": "#3498DB",
    "tooltip": "",
    "helpUrl": ""
},
{
    "type": "ibit_analog_read",
    "message0": "Analog read pin %1",
    "args0": [
      {
        "type": "field_dropdown",
        "name": "pin",
        "options": [
          [ "ADC0", "0" ],
          [ "ADC1", "1" ],
          [ "ADC2", "2" ],
          [ "ADC3", "3" ],
          [ "ADC4", "4" ],
          [ "ADC5", "5" ],
          [ "ADC6", "6" ],
          [ "ADC7", "7" ],
        ]
      }
    ],
    "inputsInline": true,
    "output": "Number",
    "colour": "#3498DB",
    "tooltip": "",
    "helpUrl": ""
}]
);
