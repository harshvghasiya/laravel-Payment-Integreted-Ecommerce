<!-- // Let's Click this button automatically when this page load using javascript -->
<!-- You can hide this button -->
<button id="rzp-button1" hidden>Pay</button>  
<script src="https://checkout.razorpay.com/v1/checkout.js"></script>
<script>
var options = {
    "key": "<?php echo e($response['razorpayId']); ?>", 
    "amount": <?php echo e($response['amount']); ?>, 
    "currency": "<?php echo e($response['currency']); ?>",
    "name": "<?php echo e($response['name']); ?>",
    "description": "<?php echo e($response['description']); ?>",
    "image": "https://example.com/your_logo", 
    "order_id": "<?php echo e($response['orderId']); ?>", 
    "handler": function (response){
        if (typeof response.razorpay_payment_id != 'undefined') {
            document.getElementById('rzp_paymentid').value = response.razorpay_payment_id;
            document.getElementById('rzp_orderid').value = response.razorpay_order_id;
            document.getElementById('rzp_signature').value = response.razorpay_signature;
            document.getElementById('amount').value = <?php echo e($response['amount']); ?>;
            document.getElementById('id').value = <?php echo e($response['id']); ?>;
            document.getElementById('rzp-paymentresponse').click();            
        }else{
            alert('something went wrong');
        }

    },
    "prefill": {
        "name": "<?php echo e($response['name']); ?>",
        "email": "<?php echo e($response['email']); ?>",
        "contact": "<?php echo e($response['mobile']); ?>"
    },
    "notes": {
        "address": "<?php echo e($response['address']); ?>"
    },
    "theme": {
        "color": "#F37254"
    }
};
var rzp1 = new Razorpay(options);
window.onload = function(){
    document.getElementById('rzp-button1').click();
};

document.getElementById('rzp-button1').onclick = function(e){
    rzp1.open();
    e.preventDefault();
}
</script>

<!-- This form is hidden -->
<form action="<?php echo e(route('front.payment.complete')); ?>" method="POST" hidden>
        <input type="hidden" value="<?php echo e(csrf_token()); ?>" name="_token" /> 
        <input type="text" class="form-control" id="rzp_paymentid"  name="rzp_paymentid">
        <input type="text" class="form-control" id="rzp_orderid" name="rzp_orderid">
        <input type="text" class="form-control" id="rzp_signature" name="rzp_signature">
        <input type="text" class="form-control" id="amount" name="amount">
        <input type="text" class="form-control" id="id" name="id">
    <button type="submit" id="rzp-paymentresponse" class="btn btn-primary">Submit</button>
</form><?php /**PATH E:\laragon\www\amit_ecom\resources\views/front/payment/index.blade.php ENDPATH**/ ?>