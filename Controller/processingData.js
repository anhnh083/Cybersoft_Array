export class arrSoNguyen {
    constructor(_arr) {
        this.arr = _arr;
    }
    tongSoDuong() {
        let tong = 0;
        this.arr.forEach(element => {
            if (element >= 0) tong += parseInt(element);
        });
        return tong;
    }

    demSoDuong() {
        let count = 0;
        this.arr.forEach(element => {
            if (element >= 0) count++;
        });
        return count;
    }
    
    soChanCuoiCung() {
        let number = 0;
        this.arr.forEach(element => {
            if (element % 2 === 0) number = element;
        });
        return number;
    }

    soSanh(){
        let am = 0;
        let duong = 0;
        this.arr.forEach(element => {
            if (element >= 0) duong += 1;
            if (element < 0) am += 1;
        });
        if(am > duong) return 'Số âm nhiều hơn số dương';
        if(duong > am) return 'Số dương nhiều hơn số âm';
        if(duong === am) return 'Số dương và số âm bằng nhau';
    }
}