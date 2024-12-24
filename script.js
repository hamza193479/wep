document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // منع إرسال النموذج بشكل تقليدي

    // إظهار رسالة التأكيد
    document.getElementById('success-message').style.display = 'block';

    // إعادة تعيين النموذج
    document.getElementById('contact-form').reset();
});
