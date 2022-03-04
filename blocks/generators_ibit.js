Blockly.Python['ibit_motor1'] = function (block) {
    Blockly.Python.definitions_['import_iBIT'] = 'import iBIT';

    var dropdown_n = block.getFieldValue('n');
    var dropdown_dir = block.getFieldValue('dir');
    var value_speed = Blockly.Python.valueToCode(block, 'speed', Blockly.Python.ORDER_ATOMIC);

    var code = `iBIT.${dropdown_n}.set(${(dropdown_dir === "FORWARD" ? "" : "-") + value_speed})\n`;
    return code;
};

Blockly.Python['ibit_motor2'] = function (block) {
    Blockly.Python.definitions_['import_iBIT'] = 'import iBIT';

    var dropdown_dir = block.getFieldValue('dir');
    var value_speed1 = Blockly.Python.valueToCode(block, 'speed1', Blockly.Python.ORDER_ATOMIC);
    var value_speed2 = Blockly.Python.valueToCode(block, 'speed2', Blockly.Python.ORDER_ATOMIC);

    var code = `iBIT.M1.set(${(dropdown_dir === "FORWARD" ? "" : "-") + value_speed1}); iBIT.M2.set(${(dropdown_dir === "FORWARD" ? "" : "-") + value_speed2})\n`;
    return code;
};

Blockly.Python['ibit_turn'] = function (block) {
    Blockly.Python.definitions_['import_iBIT'] = 'import iBIT';

    var dropdown_dir = block.getFieldValue('dir');
    var value_speed = Blockly.Python.valueToCode(block, 'speed', Blockly.Python.ORDER_ATOMIC);

    var code = `iBIT.M1.set(${dropdown_dir === "RIGHT" ? value_speed : 0}); iBIT.M2.set(${dropdown_dir === "LEFT" ? value_speed : 0}\n`;
    return code;
};

Blockly.Python['ibit_spin'] = function (block) {
    Blockly.Python.definitions_['import_iBIT'] = 'import iBIT';

    var dropdown_dir = block.getFieldValue('dir');
    var value_speed = Blockly.Python.valueToCode(block, 'speed', Blockly.Python.ORDER_ATOMIC);

    var code = `iBIT.M1.set(${(dropdown_dir === "RIGHT" ? "" : "-") + value_speed}); iBIT.M2.set(${(dropdown_dir === "LEFT" ? "" : "-") + value_speed}\n`;
    return code;
};

Blockly.Python['ibit_motor_stop'] = function (block) {
    Blockly.Python.definitions_['import_iBIT'] = 'import iBIT';

    var code = 'iBIT.M1.set(0); iBIT.M2.set(0)\n';
    return code;
};

Blockly.Python['ibit_servo'] = function (block) {
    Blockly.Python.definitions_['import_iBIT'] = 'import iBIT';

    var dropdown_ch = block.getFieldValue('ch');
    var value_angle = Blockly.Python.valueToCode(block, 'angle', Blockly.Python.ORDER_ATOMIC);

    var code = `iBIT.${dropdown_ch}.angle(${value_angle})\n`;
    return code;
};

Blockly.Python['ibit_servo_stop'] = function (block) {
    Blockly.Python.definitions_['import_iBIT'] = 'import iBIT';

    var dropdown_ch = block.getFieldValue('ch');

    var code = `iBIT.${dropdown_ch}.stop()\n`;
    return code;
};
