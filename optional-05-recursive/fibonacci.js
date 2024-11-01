function fibonacci(n) {
    if (n === 0){
        return 0;
    };
    if (n === 1){
        return [0,1];  
    };
    const deretFibo = fibonacci(n - 1);
    const nextFibo = deretFibo[deretFibo.length - 1] + deretFibo[deretFibo.length - 2];
    deretFibo.push(nextFibo);

    return deretFibo;
}

// Jangan hapus kode di bawah ini!
export default fibonacci;
