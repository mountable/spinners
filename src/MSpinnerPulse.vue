<template>
    <i class="m-spinner--pulse"></i>
</template>

<script>
export default {
    name: 'm-spinner-pulse'
}
</script>

<style lang="scss">
.m-spinner--pulse {
    --spinner-color: var(--color, black);
    --spinner-color-secondary: var(--color-secondary ,currentColor);
    --spinner-duration: 2s;
    --spinner-size: 64px;

    @extend %pulse;
    box-shadow: inset 0 0 1em 0 var(--spinner-color-secondary);
    display: inline-flex;
    font-size: var(--spinner-size);
    color: var(--spinner-color);
    width: 1em;
    height: 1em;
    max-width: 1em;
    max-height: 1em;
    position: relative;

    &::before {
        @extend %pulse;
        @extend %pseudo-pulse;
    }

    &::after {
        @extend %pulse;
        @extend %pseudo-pulse;
        animation-delay: calc(var(--spinner-duration) / -2);
    }
}

%pulse {
    border-radius: 50%;
}

%pseudo-pulse {
    content: '';
    background-color: currentColor;
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    opacity: 0.6;
    animation-name: m-spinner-pulse;
    animation-duration: var(--spinner-duration);
    animation-iteration-count: infinite;
    animation-timing-function: ease-in-out;
}

@keyframes m-spinner-pulse {
    from, to {
        transform: scale(0);
    }

    50% {
        transform: scale(1);
        color: var(--spinner-color-secondary);
    }
}
</style>
