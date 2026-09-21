# How to write a useful prompt for a spending agent

A useful prompt does not need to sound like code. It needs to tell the agent what to do and where the task ends. If money is involved, the amount should be explicit and consistent with the separate spend-limit control.

For the Veyro example, the core request is short: search X for a Solana meme coin and stay within a defined amount. The goal is to make that interaction easy, not to ask every user to become a prompt engineer.

## Include the details that change the task

The source tells the agent where to look. The subject tells it what to look for. A time frame can narrow a search when current discussion matters. A spending ceiling sets a boundary around an authorized action.

An example instruction is: “Search recent posts on X for a Solana meme coin. Explain your candidate. Spend up to $100.” This is an illustration of the intended interaction, not a recommendation to spend that amount or a claim that every demo mode carries out a real purchase.

The word “up to” matters. It describes a maximum. It does not require the agent to use the full allowance, and it should not invite the agent to split the task into extra purchases just to reach the number.

## Be careful with the word best

Best is often a placeholder for a preference you have not stated. Do you mean the most discussed, the most relevant to a theme, or the candidate with the clearest identifiable source? An agent can give a more useful explanation when it knows what you value.

No wording can turn a meme coin search into a reliable prediction of future returns. “Find the best performer tomorrow” asks for certainty the agent does not have. “Find a candidate and explain the evidence” produces a result you can inspect.

Read [what best means in a meme coin search](/guides/best-meme-coin-search) before treating a ranking as more than a ranking under particular criteria.

## Keep the budget consistent

If the text says $100 and the spend field says $10, the request is ambiguous to a human even if the software has a rule for resolving it. Check both before you run the task. The visible amount should match what you intend to allow.

A budget also has a scope. Is it for one action or the entire task? Does it include any fees? If the interface does not explain that distinction, avoid guessing. The number should describe a real boundary, not just appear in the prompt as decoration.

For more on the amount itself, see [agent spending limits](/guides/agent-spending-limits).

## Do not add permission you do not mean

Phrases such as “do whatever it takes” make an instruction less precise. They can sound helpful while obscuring the stopping point. If you want research only, say research only. If you want the agent to act within a limit, use the controls intended for that permission.

A changed instruction also deserves attention. If you edit a prompt after the task has started, do not assume it changes an action already submitted. Check the status and start a new task only when that is what you intend.

## Judge the result against your own words

After the run, return to the original request. Did the agent search the right source? Is the candidate on the intended network? Does the explanation support the choice? Did the outcome remain inside the limit?

If the answer is no, more elaborate wording may not be the solution. The source might be unavailable, the task might be unsupported, or the result might require a clearer product explanation. A short, specific request makes those problems easier to spot.

The [Veyro demo](https://tryveyro.casa) is the place to see the current experience. Start with a task you can explain in one sentence. That is usually enough to tell whether the agent understood what you wanted.
