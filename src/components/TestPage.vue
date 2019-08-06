<template>
<div class="sib-form" style="text-align: center;
         background-color: #EFF2F7;                                           ">
  <div id="sib-form-container" class="sib-form-container">
    <div id="sib-container" class="sib-container--large sib-container--vertical" style=" text-align:center; background-color:rgba(255,255,255,1); max-width:540px; border-radius:3px; border-width:1px; border-color:#C0CCD9; border-style:solid;">
      <form id="sib-form" method="POST" action="https://sibforms.com/serve/MUIEAGVHPUmOMAZPG0Oi-z2Wy5yj_RyZCQ8CgsVDLdLMEqege3XPx5-xcQpyL1yy65ZIpYIC6zIiG8f0mvLFSi3lMk6oZ7HOlmtyazCbIIY90V9WT5Ghq44lH30smQ1nNUBladFOAlylW_pUQF6N3p5Y2Z9pR1LN3FjLFBS8ZyZwWKZAA4rvfVU4pTswSE6hOufR2bCSIqGgIEj0">
        <div style="padding: 16px 0;">
          <div class="sib-input sib-form-block">
            <div class="form__entry entry_block">
              <div class="form__label-row ">

                <div class="entry__field">
                  <input class="input" maxlength="200" type="email" id="EMAIL" name="EMAIL" autocomplete="off" data-required="true" required placeholder="Inserta tu em" />
                </div>
              </div>

              <label class="entry__error entry__error--primary" style=" font-size:16px; text-align:left; font-family:&quot;Helvetica&quot;, sans-serif; color:#661d1d; background-color:#ffeded; border-radius:3px; border-width:px; border-color:#ff4949;">
              </label>
              <label class="entry__specification" style=" font-size:12px; text-align:left; font-family:&quot;Helvetica&quot;, sans-serif; color:#8390A4; border-width:px;">
                Introduzca su dirección de e-mail para suscribirse. Ej.: abc@xyz.com
              </label>
            </div>
          </div>
        </div>
        <div style="padding: 16px 0;">
          <div class="sib-form-block" style="text-align: left">
            <button class="sib-form-block__button" style=" font-size:16px; text-align:left; font-weight:700; font-family:&quot;Helvetica&quot;, sans-serif; color:#FFFFFF; background-color:#3E4857; border-radius:3px; border-width:0px;" form="sib-form" type="submit">
              SUSCRIBIRSE
            </button>
            <div class="sib-loader" style="display: none;">
              <div style="background: #3E4857;"></div>
              <div style="background: #3E4857;"></div>
              <div style="background: #3E4857;"></div>
              <div style="background: #3E4857;"></div>
              <div style="background: #3E4857;"></div>
              <div style="background: #3E4857;"></div>
              <div style="background: #3E4857;"></div>
              <div style="background: #3E4857;"></div>
              <div style="background: #3E4857;"></div>
              <div style="background: #3E4857;"></div>
              <div style="background: #3E4857;"></div>
              <div style="background: #3E4857;"></div>
            </div>
          </div>
        </div>
        <input type="text" name="email_address_check" value="" class="input--hidden">
        <input type="hidden" name="locale" value="es">
        <input type="hidden" name="html_type" value="simple">
      </form>
    </div>
  </div>
</div>
<!-- END - We recommend to place the below code where you want the form in your website html  -->
<!-- End Sendinblue Form -->
</template>
<script>
export default {
	name: 'Test',
};
</script>
