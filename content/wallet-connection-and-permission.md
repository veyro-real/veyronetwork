# Connecting a wallet is a step, not a blank check

When an agent experience asks you to connect a wallet, it is easy to focus on reaching the next screen. Take a moment to distinguish connection from any later request to authorize an action. They serve different purposes.

A wallet connection can help an application identify the account you want to use. A spending action may involve a separate signature or permission. The exact flow depends on the wallet and application, so the words shown in the request matter more than a general assumption about how wallets work.

## Read the action being requested

Start with the site you intended to visit and the account being shown. Then read whether the wallet is asking to connect, sign a message, or approve a transaction. Those labels should not be treated as interchangeable.

A message signature can also have a purpose beyond simple identification. Do not assume that something is harmless solely because it is not presented as a transfer. The application should explain how the requested step relates to your task.

This is a practical review, not a demand to decode every technical field. If the visible purpose does not match what you are trying to do, stop and resolve that mismatch before continuing.

## Keep the task and the amount visible

For an agent, the relevant context is the instruction and its spending boundary. If you asked for a search with a defined maximum, a later authorization should not surprise you with a different task or a larger amount.

The [Veyro demo](https://tryveyro.casa) puts a wallet connection in its navigation and the agent's task in the main form. The presence of both controls does not by itself establish that connecting a wallet funds a task or completes a purchase. Read the active result and the actual request made by the wallet.

Our guide to [agent payment permission](/guides/agent-payment-permission) explains why an account identity and authority to spend are separate questions.

## Check the network context

Veyro's public product is built around Solana. An account, token, or transaction reference needs to be interpreted in that context. A similarly named asset elsewhere is not automatically the asset the agent meant.

The main product page and demo currently use different deployment-status wording. A wallet connection alone does not resolve that difference. Check the actual mode and transaction details before assuming an interaction is a real-money purchase.

This is especially important for demonstrations. A test asset can show the intended workflow without having the value or market conditions of a real asset. A mainnet program label can describe a deployment without proving that a particular run executed a mainnet purchase.

## Disconnecting and ending spending authority

Disconnecting a website session and revoking a previously granted permission are different ideas. The effect depends on the system's permission model. Do not assume that closing a tab reverses an action already submitted or ends every prior authorization.

A product that supports ongoing authority should offer a clear way to inspect and end it. If the action is already completed, ending future permission does not undo the past transaction. Read [stopping an agent](/guides/stopping-an-agent) for that distinction.

## A simple experience can still explain the important step

The best interface does not bury you in network details. It surfaces the details when they change the decision: which account, what action, what amount, and what happens next.

Use those four questions when a wallet appears during an agent task. If the answers match your intention, the step is understandable. If the answers are missing, the right next move is clarification rather than assuming the agent must know what you meant.
