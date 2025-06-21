import { ability } from '@saas/auth'

const userCanInviteSomeoneElse = ability.can('invite', 'User')
const userCanDeleteSomeoneElse = ability.cannot('delete', 'User')

console.log(userCanInviteSomeoneElse, userCanDeleteSomeoneElse)
