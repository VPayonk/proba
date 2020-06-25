let foopicker = new FooPicker({
    id: 'datepicker',
    dateFormat: 'dd/MM/yyyy'
});

$('.btn-date').on('click', function () {
    let datepicker = $('#datepicker');
    let date = new Date()
    let day = date.getDate()
    let month = date.getMonth() < 9 ? `0${date.getMonth() + 1}` : date.getMonth() + 1
    let year = date.getFullYear()

    datepicker.val(`${day}/${month}/${year}`)
})

