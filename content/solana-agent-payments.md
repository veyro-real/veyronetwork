# Solana agent payments: a simple experience on a specific network

Veyro's public product is built around Solana. The user-facing idea stays straightforward: give the agent a task, set a spend limit, and see the result. Solana is the network context beneath that experience, not a subject every visitor has to master before understanding it.

The network becomes relevant when identifying an asset, checking a transaction, or interpreting a fee. Knowing those few points can make an agent result easier to read without turning the task into a technical exercise.

## A network gives an action its context

A token name is not a universal identifier. An asset with the same name on another network may be unrelated. When an agent proposes a Solana token, the result should identify the asset in that network's terms.

Solana's token documentation describes a mint account as representing a specific token. The mint address is useful when comparing a candidate with its source or transaction record. [Solana token documentation](https://solana.com/docs/tokens).

You do not need to memorize addresses. You need a way to check that the candidate, the explanation, and any eventual action refer to the same asset. See [checking a candidate](/guides/checking-meme-coin-candidates).

## The instruction and the network action are different layers

You can ask an agent to search X in ordinary language. The search itself is not a Solana transaction. A later authorized action may be. Keeping those stages separate makes it easier to understand the result.

The [Veyro demo](https://tryveyro.casa) presents the instruction and spend amount first, then reports a decision and any available result. A candidate can exist without a completed transaction, and a spending check can pass before execution finishes.

This is why a polished interface should not replace status with animation. The meaningful information is whether the action was merely considered, submitted, or completed.

## Network fees are a separate fact to understand

Solana transactions require a fee paid in SOL. Its documentation describes a base fee and an optional prioritization fee. The exact cost depends on the transaction and current configuration; this guide does not quote a universal all-in price. [Solana fee documentation](https://solana.com/docs/core/fees).

If the main task amount is shown in USDC, that does not automatically explain how a network fee is handled or who pays it. A product can simplify the experience while still disclosing the relevant cost.

Before interpreting “up to $100” as a total outlay, check what the cap covers. The [spending-limit guide](/guides/agent-spending-limits) explains why the purchase amount and all-in cost can differ.

## A deployment is not the same as a completed user task

Software can be deployed on a network while a particular demo run uses a rehearsal or test path. A deployment reference shows something about the software's presence. It does not prove that your own request made a real purchase.

Veyro's landing page currently describes a testnet demonstration while the demo interface displays mainnet deployment information. This guide does not resolve that operational difference by guessing. Check the active mode and the transaction evidence associated with the specific attempt.

## What the user should have to understand

The essential questions remain human ones: what did I ask for, what could the agent spend, and what happened? Network details belong where they help answer those questions.

An explorer link can provide evidence about a transaction. A token identifier can clarify a candidate. A fee explanation can clarify the total cost. None needs to crowd out the simple request at the center of the experience.

Visit [Veyro](https://veyro.casa) for the product overview or [Try Veyro](https://tryveyro.casa) for the current demo. The goal is to let the agent handle more of the task while leaving the action understandable to the person who authorized it.
