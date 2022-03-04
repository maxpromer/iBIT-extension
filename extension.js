({
    name: "iBIT", // Name
    description: "iBIT package for microBlock, Robot board control by Mbits, OpenBit",
    author: "INEX",
    category: "Device Control",
    version: "1.0.0",
    icon: "/static/icon.png", // Category icon
    color: "#3498DB", // Category color (recommend some blocks color)
    blocks: [ // Blocks in Category
        {
            xml: `
                <block type="ibit_motor1">
                    <value name="speed">
                        <shadow type="math_number">
                            <field name="NUM">50</field>
                        </shadow>
                    </value>
                </block>
            `
        },
        {
            xml: `
                <block type="ibit_motor2">
                    <value name="speed">
                        <shadow type="math_number">
                            <field name="NUM">50</field>
                        </shadow>
                    </value>
                </block>
            `
        },
        {
            xml: `
                <block type="ibit_turn">
                    <value name="speed">
                        <shadow type="math_number">
                            <field name="NUM">50</field>
                        </shadow>
                    </value>
                </block>
            `
        },
        {
            xml: `
                <block type="ibit_spin">
                    <value name="speed">
                        <shadow type="math_number">
                            <field name="NUM">50</field>
                        </shadow>
                    </value>
                </block>
            `
        },
        "ibit_motor_stop",
        {
            xml: `
                <block type="ibit_servo">
                    <value name="angle">
                        <shadow type="math_number">
                            <field name="NUM">90</field>
                        </shadow>
                    </value>
                </block>
            `
        },
        "ibit_servo_stop"
    ],
    chip: [
        "ESP32" // Chip support
    ]
});
