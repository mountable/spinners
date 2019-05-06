<template>
    <i class="k-spinner--swirl"></i>
</template>

<script>
export default {
    name: 'k-spinner-swirl'
}
</script>

<style lang="scss">
$shrink: 0.05em;

.k-spinner--swirl {
    --spinner-color: var(--color, black);
    --spinner-color-secondary: var(--color-secondary ,currentColor);
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
    animation-duration: 2s;

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
    animation-name: k-swirl;
    animation-iteration-count: infinite;
    animation-timing-function: linear;
}

%swirl-pseudo {
    content: '';
    position: absolute;
}

@keyframes k-swirl {
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
