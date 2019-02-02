import KSpinnerSpin from './KSpinnerSpin'
import KSpinnerPulse from './KSpinnerPulse'

export { KSpinnerSpin }
export { KSpinnerPulse }

export default {
    KSpinnerSpin,
    KSpinnerPulse,

    install(Vue) {
        Vue.component(KSpinnerSpin.name, KSpinnerSpin)
        Vue.component(KSpinnerPulse.name, KSpinnerPulse)
    }
}
