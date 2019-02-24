<template>
    <i class="k-spinner--swirl"></i>
</template>

<script>
export default {
    name: 'k-spinner-swirl'
}
</script>

<style lang="scss">
$animation-duration: 2.0s;
$size: 64px;
$shrink: 0.05em;

.k-spinner--swirl {
    @extend %swirl;
    display: inline-flex;
    font-size: $size;
    color: white;
    width: 1em;
    height: 1em;
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
    to {
        transform: rotate(360deg)
    }
}
</style>
