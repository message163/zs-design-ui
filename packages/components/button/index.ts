import Button from './Button.vue'
import { App } from 'vue'
import '../../theme/src/button.scss'
import '../../theme/src/var.scss'
export { Button }
export default {
    install(app: App) {
        app.component(Button.name, Button)
    }
}
