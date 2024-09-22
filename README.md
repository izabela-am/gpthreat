This is an initial PoC. The code, the prompt and this readme are all shit rn but they'll get better soon.

basically I want to use gen ai models to generate security requirements based off of a threat model diagram from a certain tool. For the PoC, I'll be using Google's Gemini and OWASP's Threat Dragon.

I'll make this into a CLI later but for the PoC most things are hardcoded

CLI usage would be smth like:
gpthreat --model gemini --tmtool threatdragon