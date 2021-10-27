<template lang="pug">
footer.footer
        div.container.footer--container
         div
           div.logo-wrapper.footer--logo-wrapper
            include ../assets/logo.svg
            p.footer--logo-p.logo-p ПОСТУПАЙ ПРАВИЛЬНО
           
         div.footer__error
           p Нашли ошибку? 
           p.footer--error-p-info Сообщите нам на почту 
           a(href="") supportpp@digitalobr.ru 
           
         div.footer__quote © При цитировании информации с сайта ссылка на первоисточник обязательна
</template>

<style lang="scss">
@import "../assets/scss/general.scss";

.footer {
    background-color: $blueColorText;
    color: $whiteColor;
}

.footer--container {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: 1fr 80px;
    padding: 50px 165px 90px;
}

.footer__error {
    grid-row: 2/3;
    align-self: end;
    font-weight: normal;
    font-size: 14px;
    line-height: 17px;

    a {
        color: $whiteColor;
    }
}

.footer--error-p-info {
    display: inline;
}

.footer--logo-wrapper > svg > path {
    fill: $whiteColor;
}

.footer__quote {
    grid-row: 2/3;
    opacity: 0.5;
    align-self: end;
    font-weight: normal;
    font-size: 14px;
    line-height: 16px;
}

.footer--logo-p {
    color: $whiteColor;
}

@media (max-width: 1080px) {

    .footer--container {
        grid-template-rows: 1fr 1fr 1fr;
        grid-template-columns: 1fr;
        padding: 30px 40px;
    }

    .footer__quote {
        grid-row: 3/4;
    }

    .footer--logo-wrapper {
        margin-bottom: 15px;
    }

    .footer__error {
        margin-bottom: 23px;
    }
}

@media (max-width: 767px) {
    .footer--container {
        padding: 30px 15px;
    }
}

</style>