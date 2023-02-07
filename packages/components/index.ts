import type { App } from 'vue'
import { Button } from './button'
export { Button }
export default {
    install(app: App) {
        app.component(Button.name, Button)
    }
}
