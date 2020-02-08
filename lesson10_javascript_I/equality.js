console.log("" == "0");
console.log(0 == "");
console.log(0 == "0");
console.log(false == "false");
console.log(false == "0");
console.log(false == "0");
console.log("0" == false);
// The reason is because when you explicitly do "0" == false,
// both sides are being converted to
// numbers, and then the comparison is performed.

if ("0") console.log("ha");
// "0" is a string, and since it's not empty, it's evaluated to true.

/**
 * Equal (==)

 If the two operands are not of the same type, JavaScript converts the
 operands then applies strict comparison. If either operand is a number
 or a boolean, the operands are converted to numbers if possible; else
 if either operand is a string, the other operand is converted to a
 string if possible. If both operands are objects, then JavaScript
 compares internal references which are equal when operands refer to
 the same object in memory.
 */
console.log("0" == false);
console.log(false == undefined);
console.log(false == null);
console.log(null == undefined);
console.log(" \t\r\n" == 0);