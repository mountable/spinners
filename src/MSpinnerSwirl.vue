<template>
    <i class="m-spinner--swirl"></i>
</template>

<script>
export default {
    name: 'm-spinner-swirl'
}
</script>

<style lang="scss">
$shrink: 0.05em;

.m-spinner--swirl {
    --spinner-color: var(--color, black);
    --spinner-color-secondary: var(--color-secondary ,currentColor);
    --spinner-duration: 2s;
    --spinner-size: 64px;

    @extend %swirl;
    display: inline-flex;
    font-size: var(--spinner-size);
    color: var(--spinner-color);
    width: 1em;
    height: 1em;
    max-width: 1em;
    max-height: 1em;
    position: relative;
    animation-duration: var(--spinner-duration);

    &::before {
        @extend %swirl;
        @extend %swirl-pseudo;
        top: $shrink;
        right: $shrink;
        bottom: $shrink;
        left: $shrink;
        animation-duration: 3s;
    }

    &::after {
        @extend %swirl;
        @extend %swirl-pseudo;
        top: $shrink * 2.7;
        right: $shrink * 2.7;
        bottom: $shrink * 2.7;
        left: $shrink * 2.7;
        animation-duration: 1.5s;
    }
}

%swirl {
    border: .0333em solid transparent;
    border-radius: 50%;
    border-top-color: currentColor;
    animation-name: m-spinner-swirl;
    animation-iteration-count: infinite;
    animation-timing-function: linear;
}

%swirl-pseudo {
    content: '';
    position: absolute;
}

@keyframes m-spinner-swirl {
    from {
        transform: rotate(0deg);
    }

    50% {
        color: var(--spinner-color-secondary);
    }

    to {
        transform: rotate(360deg);
    }
}
</style>
