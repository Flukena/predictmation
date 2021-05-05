<template>
  <div style="height: 650px">
    <div class="boxbasket">
      <div class="columns">
        <div class="column">
          <label for="" class="forbasket">Product list</label><br /><br /><br />
          <div class="columns" id="ODRT">
            <div class="column">
              <div>Order list</div>
            </div>
            <div class="column">
              <div>Price (฿)</div>
            </div>
          </div>
          <div class="columns" id="ODRT2">
            <div class="column">
              <div>Latte</div>
            </div>
            <div class="column">
              <div>20</div>
            </div>
          </div>
          <div class="columns" id="ODRT2">
            <div class="column">
              <div>Mocca</div>
            </div>
            <div class="column">
              <div>25</div>
            </div>
          </div>
          <div class="row" style="margin-top: 38%; line-height: 0px" id="totalstyle">
            <div class="columns">
            <div class="column">
              <div>Total price</div>
            </div>
          </div>
          <div class="columns" style="color: #53B434">
            <div class="column">
              <div>Discount</div>
            </div>
          </div>
          <div class="columns">
            <div class="column">
              <div>Final price</div>
            </div>
          </div>
          </div>
        </div>
        

        <div class="column" id="payment">
          <h1 style="position: relative; left: -15px; color: white">Payment</h1>
          <div
            class="custom-select"
            style="width: 200px; position: relative; left: -45px"
          >
            <select id="paymentchoose" style="position: relative; left: -15px">
              <option value="">Choose</option>
              <option value="">Credit card</option>
              <option value="">Bank transfer</option>
              <option value="">True wallet</option>
            </select>
            <button
              id="paymentbut"
              style="position: relative; left: 160px; top: -55px"
            >
              Paid
            </button>
          </div>
          <img
            style="
              margin-left: -25%;
              margin-top: -40%;
              width: 70%;
              height: auto;
              opacity: 100%;
            "
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Numismatics_and_Notaphily_icon.png/1024px-Numismatics_and_Notaphily_icon.png"
            alt=""
          />
        </div>
      </div>
    </div>
  </div>
</template>