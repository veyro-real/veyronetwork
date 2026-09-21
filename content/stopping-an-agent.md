# How to think about stopping an AI spending agent

Stopping an agent can mean stopping research, preventing the next action, or ending a spending permission. It does not usually mean reversing a transaction that has already completed. The interface should make the distinction clear.

This matters because an agent can work through several stages quickly. You may decide to stop while it is still searching, while an action is being checked, or after a transaction has been submitted. The stage determines what remains possible.

## Stop future work first

If a task no longer matches what you want, the immediate goal is to prevent further activity under that instruction. A product may provide a cancellation control, a way to revoke permission, or both. Those controls can have different effects.

Ending research prevents the agent from continuing to look for candidates. Ending permission prevents later actions covered by that permission. If the system supports both, it should not use one vague label to hide the difference.

Veyro's public product description includes revocation as part of owner control. That describes the ability to end authority; it should not be interpreted as a universal undo button for past transfers. [Veyro product site](https://veyro.casa).

## A submitted action needs a status check

Imagine pressing stop just after the agent sends a transaction. The screen may still be waiting for a response, but the network may already be processing it. Closing the page is not reliable evidence that the action was canceled.

The useful next step is to check the existing result or transaction reference. A clear status should distinguish not submitted, pending, failed, and completed wherever the product can establish those facts. An unknown result should remain unknown until it is resolved.

See [reading a transaction receipt](/guides/agent-transaction-receipts) for what a reference can help you establish and what it cannot.

## Revocation looks forward

A permission can be valid when one action executes and invalid for the next one. That is not a contradiction. It reflects the ordering of the action and the revocation.

From the user's perspective, the key question is whether any work remains in flight. A product should explain what it has stopped and whether an earlier action still needs to be resolved. Saying “revoked” without showing a pending transaction can leave the owner with the wrong impression.

Once value has moved, any recovery depends on the asset, recipient, and transaction path. Do not assume that ending an agent's permission creates the same remedy as canceling an unsubmitted task.

## Expiry is useful even when you do nothing

A permission with an end time can stop being usable without relying on you to remember it later. That is a helpful boundary for a one-off task. It should not be quietly renewed just because the agent is still trying to finish.

Expiry and manual revocation solve related but different problems. Expiry ends authority at a planned time. Revocation lets the owner end it earlier. Neither should be presented as reversing completed activity. Read [permission expiry](/guides/agent-permission-expiry) for examples.

## What a good stop result tells you

You should be able to see whether the task stopped, whether its spending authority ended, and whether any earlier action remains unresolved. The wording can be short as long as it is precise.

If you later restart, treat it as a deliberate decision about a new or renewed task. Check the amount and scope again rather than assuming the old settings remain appropriate.

The purpose of a stop control is to keep delegation manageable. An agent can save you work only if ending that work is also understandable. The [Veyro demo](https://tryveyro.casa) is the current place to inspect the available controls and their actual outcomes.
