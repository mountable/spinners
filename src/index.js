import KSpinnerSpin from './KSpinnerSpin'
import KSpinnerPulse from './KSpinnerPulse'
import KSpinnerSwirl from './KSpinnerSwirl'
import KSpinnerSignal from './KSpinnerSignal'

export { 
    KSpinnerSpin, 
    KSpinnerPulse,
    KSpinnerSwirl,
    KSpinnerSignal
}

export default {
    KSpinnerSpin,
    KSpinnerPulse,
    KSpinnerSwirl,
    KSpinnerSignal,

    install(Vue) {
        Vue.component(KSpinnerSpin.name, KSpinnerSpin)
        Vue.component(KSpinnerPulse.name, KSpinnerPulse)
        Vue.component(KSpinnerSwirl.name, KSpinnerSwirl)
        Vue.component(KSpinnerSignal.name, KSpinnerSignal)
    }
}