# Reading a transaction receipt after an agent runs

A transaction receipt helps you connect an agent's result to an action recorded on a network. It is useful evidence, but it answers a narrower question than “was this a good purchase?” Start by checking which action the reference belongs to and whether it actually completed.

For a Solana-based experience such as Veyro, a transaction link can take you to an explorer. The page may contain more detail than you need. You can focus on identity, status, and the relevant movement of assets.

## Make sure you are looking at the right transaction

A product can show references for several purposes: a program deployment, a proposed action, or a completed user action. A deployment transaction shows that software was deployed. It is not the receipt for your own task.

The [Veyro demo](https://tryveyro.casa) has a deployment reference in its network information and can show a separate receipt for an attempt. Keep those contexts distinct. The presence of a working explorer link somewhere on the page does not prove your run moved funds.

Match the reference to the task's timing and displayed result. If there are multiple attempts, confirm which one you are inspecting before drawing a conclusion.

## Check status before interpreting amounts

A submitted transaction can have a different outcome from an executed one. Look for the explorer's status and any error. A reference can exist even when the intended action did not succeed.

Solana's documentation describes transactions as the way instructions are submitted together and explains their execution behavior. You do not need to read the encoding to understand that submission and success are different stages. [Solana transaction documentation](https://solana.com/docs/core/transactions).

If the explorer cannot find the reference, check the network context. A test-network reference should not be interpreted on the wrong network. If the result is still unresolved, keep that uncertainty visible rather than assuming success or starting another purchase.

## Compare the asset, not just its display name

If the task involved a token, compare its identity with the candidate shown by the agent. A similar name is not enough. The relevant token identifier helps distinguish the intended asset from another token using the same branding.

Then compare the action with the instruction. Does the recorded movement make sense for the task? If the result needs a more detailed explanation, use the transaction reference when asking for support; it is more precise than “the agent did something strange.”

Our [candidate review guide](/guides/checking-meme-coin-candidates) explains the identity step before a purchase.

## The receipt is not a profit statement

A completed transfer records an action at a particular time. It does not prove that the asset can later be sold at the same price, that the underlying project is legitimate, or that a return is likely.

Likewise, a correct transaction amount does not tell you everything about the total cost of a task. Fees or other separately disclosed costs may need to be considered. The interface should explain which amount its spending cap covers.

## Keep enough context to understand it later

A reference is most useful beside the original request, the selected candidate, the permitted amount, and the final status. Without that context, an explorer entry can be hard to connect to the reason the agent acted.

You do not need to publish that context or share private account information to keep a useful record. The point is to be able to reconstruct the action when needed.

An agent should save you time without making the result opaque. A clear receipt is one way to preserve that understanding: it connects the simple instruction at the beginning to the actual outcome at the end.
