function convertToIEEE() {
    let num = parseFloat(document.getElementById("decimalInput").value);
    if (isNaN(num)) {
        alert("Please enter a valid number");
        return;
    }

    let buffer = new ArrayBuffer(4); // 4 bytes (32 bits)
    let floatView = new Float32Array(buffer);
    let intView = new Uint32Array(buffer);

    floatView[0] = num; // Store float value
    let binaryStr = intView[0].toString(2).padStart(32, '0'); // Convert to binary

    // Extract IEEE 754 components
    let sign = binaryStr[0];
    let exponent = binaryStr.slice(1, 9);
    let mantissa = binaryStr.slice(9);

    // Display results
    document.getElementById("sign").textContent = sign;
    document.getElementById("exponent").textContent = exponent;
    document.getElementById("mantissa").textContent = mantissa;
    document.getElementById("fullBinary").textContent = binaryStr;
      }
