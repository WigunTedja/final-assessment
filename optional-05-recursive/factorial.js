function factorial(n) {
    if(n === 1 || n === 0){
        return 1
    }
    const nFactorial = n * factorial(n-1);
    return nFactorial;
}

// Jangan hapus kode di bawah ini!
export default factorial;
