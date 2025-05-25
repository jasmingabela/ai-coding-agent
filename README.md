# ai-coding-agent
## AI Coding Agent Project Summary
**User Profile**: Non-coder with 6 months LLM experience, reliant on AI for technical implementation
**Core Configuration**:
```yaml
name: Continue Config
version: 0.0.1
schema: v1
models:
  - name: DeepSeek-R1-Free
    provider: openrouter
    model: deepseek/deepseek-r1:free
    stream: false
```
**Next Development Priorities**:
1. SERPER API integration 🌐
2. MCP Server foundation 🔧
3. Session history retention 📚
4. Security filters development 🛡️
**Special Note**: Integrated with DeepSeek-R1 via OpenRouter chat interface
**Current Project Requirements**:  
- Always include `{{+ }}` markers for AI-modifiable blocks  
- Maintain directory structure documentation in `/docs`  
- Security first: Never expose API keys in code blocks

## Critical User Preference
**STOP**: Never use technical jargon unless creating code
**DO**:
- Code blocks **only** when modifying files 
- Assume zero coding/engineering knowledge
