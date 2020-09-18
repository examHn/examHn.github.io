coCho = document.getElementById('coCho')
coMeo = document.getElementById('coMeo')
tenCho = document.getElementById('tenCho')
tenMeo = document.getElementById('tenMeo')
choDen = document.getElementById('choDen')
choTrang = document.getElementById('choTrang')
choKhac = document.getElementById('choKhac')
meoDen = document.getElementById('meoDen')
meoTrang = document.getElementById('meoTrang');
meoKhac = document.getElementById('meoKhac')
longCho = document.getElementById('longCho')
longMeo = document.getElementById('longMeo')
mauCho = document.getElementsByName('mauCho')
mauMeo = document.getElementsByName('mauMeo');
console.log(mauCho[0])
anHuy = () => {
    alert('Bạn đã hủy bỏ việc gửi bản điều tra')
    document.getElementById('lyDoTa').focus()
}
anGui = () => {
    if (coCho.checked) {
        if (!tenCho.value) {
            alert('Ban phai nhap ten con vat minh yeu quy')
            tenCho.focus();
            return
        }
        if (!choDen.checked && !choTrang.checked && !choKhac.checked) {
            alert('Ban phai chon mau long cho con vat yeu quy')
            longCho.style.border = '4px solid black'
            mauCho[0].focus()
            return
        }
        longCho.style.border = '2px solid pink'
    }
    if (coMeo.checked) {
        if (!tenMeo.value) {
            alert('Ban phai nhap ten con vat minh yeu quy')
            tenMeo.focus()
            return
        }
        if (!meoDen.checked && !meoTrang.checked && !meoKhac.checked) {
            alert('Ban phai chon mau long cho con vat yeu quy')
            longMeo.style.border = '4px solid black'
            mauMeo[0].focus()
            return
        }
        longMeo.style.border = '2px solid pink'
    }
    if (!coCho.checked && !coMeo.checked) {
        alert('Ban phai chon it nhat 1 con vat trong o lua chon CO tuong ung')
        return
    }
    location = 'http://v1study.com'
}