# Giving an AI agent permission to spend

Permission answers a different question from a prompt. The prompt says what you want. Permission says what the agent may do to pursue it. Keeping those two ideas separate makes a simple interface safer to understand.

“Search X for a meme coin” can be a research task. Adding “spend up to $100” introduces a possible financial action. That additional authority should be narrow enough that you can explain it without reading the agent's entire conversation.

## Permission belongs to the owner

The agent can interpret your request, but it should not award itself a larger allowance because a candidate looks exciting. The person providing the funds sets the boundary. A search result, promotional post, or tool response should not be able to change it.

This is why a visible spend field matters. It gives the amount a place outside a free-form conversation. The [Veyro demo](https://tryveyro.casa) uses an instruction alongside a spend limit, reflecting the product's emphasis on human control.

The boundary must also exist when the action is attempted. A sentence promising restraint is not the same as an enforced check. The user does not need to manage the implementation, but the product should be honest about what its checks cover.

## An amount is only part of the scope

Two actions can cost the same while having completely different consequences. Buying the intended asset is not the same as sending funds to an unrelated recipient. Permission should therefore describe the kind of action as well as the amount.

Time matters too. A task you authorized for a short session should not automatically remain open forever. The product should provide an understandable point at which the permission expires or can be ended.

Veyro's product site describes budgets, allowed actions, expiration, and revocation. Those are the boundaries it presents around delegated spending. They should not be read as a claim that every imaginable transaction or payment method is supported. [Veyro product site](https://veyro.casa).

## A changed task can need a changed decision

Suppose the agent cannot find the type of candidate you requested. Searching a different network or sending money to a different destination is not necessarily an equivalent way to finish. It may be a different task.

A useful agent should explain the gap. It can return what it found or stop because the action is outside the current permission. Quietly broadening the task makes it harder for you to understand what your original approval meant.

The same applies when a proposed amount increases. The agent should not reinterpret a maximum as an approximate preference. See [spending limits](/guides/agent-spending-limits) for the distinction between a ceiling and a target.

## Connection is not the whole permission story

A wallet connection and an authorization to spend are not the same concept. A connection can identify an account or enable a later interaction; the actual requested permissions depend on the application and wallet flow.

Read the action being requested rather than assuming every connection does the same thing. A product should explain why the step is needed and what happens next. Our [wallet connection guide](/guides/wallet-connection-and-permission) focuses on that moment in the user journey.

## The outcome should preserve the boundary

After a run, you should be able to connect the result to the permission you gave. What action was proposed? Was it allowed? Did it complete? If it was denied, which condition prevented it?

An understandable denial is a useful outcome. It shows that the system did not treat your instruction as permission to improvise without limits. Good delegation means the agent can do more work while your authority stays recognizable from the beginning of the task to the end.
