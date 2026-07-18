const value = 0;
if (value === 0 || value === -0 || value === "" || value === 0n || value === undefined || value === NaN || value === null || value === false) {
    console.log("This is falsy value")
}
else {
    console.log("Value is Truthy")
}