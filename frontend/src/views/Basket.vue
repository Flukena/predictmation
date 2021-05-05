<template>
  <div style="height: 650px">
    <div class="boxbasket">
      <div class="columns">
        <div class="column">
          <label for="" class="forbasket">Product list</label><br />
        </div>
        <div class="column" id="payment">
          <h1 style="position:relative;left: -15px">Payment</h1>
          <div class="custom-select" style="width: 200px">
            <select id="paymentchoose" style="position:relative;left: -15px">
              <option value="">Choose</option>
              <option value="">Credit card</option>
              <option value="">Bank transfer</option>
              <option value="">True wallet</option>
            </select>
          </div>
          <button id="paymentbut" style="position:relative;left: -15px">Paid</button>
        </div>
      </div>
    </div>
  </div>
</template>