<template>
  <f-main>
    <f-text center>
      <f-image
        width="160px"
        src="https://tianyuhao.cn/images/ts-mango/ts-mango.svg"
      />
    </f-text>

    <p class="title">TsMango</p>

    <f-text center>
      <f-button round href="/docs/install" color="#f47c34" text-color="#fff">
        Start using
      </f-button>
      <f-button round href="https://github.com/ts-mango/ts-mango">
        Github
      </f-button>
    </f-text>

    <f-divider />

    <f-text bold size="24px">Introduce</f-text>
    <f-text>This is a multifunctional mango.</f-text>
    <f-text>
      TsMango is a utility function library written in typescript.
    </f-text>

    <f-divider />

    <f-text bold size="24px">Why TsMango?</f-text>
    <f-text>🔥 Use TypeScript</f-text>
    <f-text>🔔 Strong type</f-text>
    <f-text>✅ Import in as needed</f-text>
    <f-text>✔️ Strict verification</f-text>
    <f-text>💪 Robust code</f-text>
    <f-text>🚩 Multi function</f-text>
    <f-text>🚀 Improve development efficiency</f-text>
  </f-main>
</template>

<style scoped>
  .f-main {
    max-width: 620px;
    margin: 40px auto;
    box-sizing: border-box;
    padding: 40px;
    padding-bottom: 0;
  }

  .f-button-default {
    margin-left: 15px;
  }

  .title {
    font-size: 25px;
    font-weight: 600;
    text-align: center;
    line-height: 70px;
    margin-bottom: 20px;
    user-select: none;
  }

  .f-text {
    display: block;
    line-height: 40px;
  }
</style>
