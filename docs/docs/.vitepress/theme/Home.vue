<template>
  <div id="home">
    <p align="center">
      <img src="https://tianyuhao.cn/mango/images/mango.svg" />
    </p>
    <p class="title">TsMango</p>

    <p align="center">
      <a href="/mango/docs/introduce.html">
        <button class="start">Start using</button>
      </a>
      <a href="https://github.com/Tyh2001/TsMango" target="_back">
        <button>Github</button>
      </a>
    </p>

    <p class="box">
      <strong>Introduce</strong>
      <span>This is a multifunctional mango.</span>
      <span>TsMango is a utility function library written in typescript.</span>
    </p>

    <p class="box">
      <strong>Why TsMango?</strong>
      <span>🔥 Use TypeScript</span>
      <span>🔔 Strong type</span>
      <span>✅ Import in as needed</span>
      <span>✔️ Strict verification</span>
      <span>💪 Robust code</span>
      <span>🚩 Multi function</span>
      <span>🚀 Improve development efficiency</span>
    </p>
  </div>
</template>

<style scoped>
  #home {
    max-width: 620px;
    margin: 40px auto;
    box-sizing: border-box;
  }
  img {
    width: 160px;
    user-select: none;
  }
  .title {
    font-size: 25px;
    font-weight: 600;
    text-align: center;
    line-height: 70px;
    margin-bottom: 20px;
    user-select: none;
  }
  button {
    width: 120px;
    height: 40px;
    border: none;
    outline: none;
    cursor: pointer;
    background: #eee;
    color: #333;
    border-radius: 10px;
    margin-bottom: 30px;
    user-select: none;
  }
  .start {
    margin-right: 15px;
    background: rgb(244, 124, 52);
    color: #fff;
    font-weight: 600;
  }
  button:hover {
    opacity: 0.8;
  }

  button:active {
    opacity: 1;
  }
  .box {
    padding: 40px;
    border-top: 1px solid rgb(224, 224, 224);
    box-sizing: border-box;
  }
  .box span {
    display: block;
    line-height: 40px;
  }
  .box strong {
    font-size: 24px;
    font-weight: 600;
    margin-bottom: 20px;
    display: block;
  }
</style>
