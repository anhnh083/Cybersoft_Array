import { arrSoNguyen } from '../Controller/processingData.js';

const mangSoNguyen = [];
const arr = new arrSoNguyen(mangSoNguyen)

document.getElementById('btnThem').onclick = () => {
    const item = document.getElementById('txtSoNguyen').value;
    mangSoNguyen.push(item);
    document.getElementById('mang').innerHTML = mangSoNguyen;
}


const container = document.querySelectorAll('#container>div');
container.forEach((item, index) => {
    const header = item.querySelector('header');
    header.addEventListener('click', () => {
        item.classList.toggle("open");
        if(item.classList.contains("open")){
            item.querySelector('.fa-solid').classList.replace('fa-chevron-down','fa-chevron-up');
        }
        else {
            item.querySelector('.fa-solid').classList.replace('fa-chevron-up','fa-chevron-down');
        }
        removeOpen(index);
    })
})

function removeOpen(index1){
    container.forEach((item2, index2) => {
        if(index1 != index2){
            item2.classList.remove("open");
            item2.querySelector('.fa-solid').classList.replace('fa-chevron-up','fa-chevron-down');

        }
    })
}

const tongSoDuong = document.querySelector('#container .tongSoDuong');
const demSoDuong = document.querySelector('#container .demSoDuong');
const soNhoNhat = document.querySelector('#container .soNhoNhat');
const soDuongNhoNhat = document.querySelector('#container .soDuongNhoNhat');
const soChanCuoiCung = document.querySelector('#container .soChanCuoiCung');
const sapXep = document.querySelector('#container .sapXep');
const soNguyenToDauTien = document.querySelector('#container .soNguyenToDauTien');
const soNguyenTrongMang = document.querySelector('#container .soNguyenTrongMang');
const soSanh = document.querySelector('#container .soSanh');
const doiCho = document.querySelector('#container .doiCho');




const buttons = document.querySelectorAll('#container button');
buttons.forEach((item, index) => {
    item.addEventListener("click", () => {
        switch (index) {
            case 0: tongSoDuong.innerHTML = arr.tongSoDuong(); return;
            case 1: demSoDuong.innerHTML = arr.demSoDuong(); return;
            case 2: soNhoNhat.innerHTML = Math.min(...mangSoNguyen); return;
            case 3: 
                let soDuong = mangSoNguyen.filter(num => num > 0);
                soDuongNhoNhat.innerHTML = Math.min(...soDuong); return;
            case 4: soChanCuoiCung.innerHTML = arr.soChanCuoiCung(); return;
            case 5: sapXep.innerHTML = mangSoNguyen.sort((a, b) => a - b); return;
            case 6: soNguyenToDauTien.innerHTML = mangSoNguyen.find(isPrime); return;
            case 7: soNguyenTrongMang.innerHTML = countIntegers(mangSoNguyen); return;
            case 8: soSanh.innerHTML = arr.soSanh(); return;
            case 9: 
                const viTri1 = document.getElementById('viTri1').value;
                const viTri2 = document.getElementById('viTri2').value;
                doiCho.innerHTML = hamDoiCho(mangSoNguyen, viTri1, viTri2); 
                return;
        }
    })
})

function isPrime(num) {
    if (num <= 1) return false; // Số nguyên tố phải lớn hơn 1
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false; // Nếu chia hết thì không phải nguyên tố
    }
    return true;
}



function countIntegers(arr) {
    let convertedArr = arr.map(Number);
    return convertedArr.filter(Number.isInteger).length;
}


function hamDoiCho(arr, index1, index2){
    [arr[index1], arr[index2]] = [arr[index2], arr[index1]];
    return arr;
}


