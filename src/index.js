import KSpinnerSpin from './KSpinnerSpin'
import KSpinnerPulse from './KSpinnerPulse'
import KSpinnerSwirl from './KSpinnerSwirl'

export { 
    KSpinnerSpin, 
    KSpinnerPulse,
    KSpinnerSwirl
}

export default {
    KSpinnerSpin,
    KSpinnerPulse,
    KSpinnerSwirl,

    install(Vue) {
        Vue.component(KSpinnerSpin.name, KSpinnerSpin)
        Vue.component(KSpinnerPulse.name, KSpinnerPulse)
        Vue.component(KSpinnerSwirl.name, KSpinnerSwirl)
    }
}