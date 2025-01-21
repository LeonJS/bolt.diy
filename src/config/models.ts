// src/config/models.ts

export interface Model {
  id: string;
  name: string;
  provider: 'ollama';
  context?: number;
}

export const models: Model[] = [
  {
    id: 'qwen-32b-custom',
    name: 'Qwen 32B Custom',
    provider: 'ollama',
    context: 32768,
  },
  {
    id: 'qwen2.5-coder:32b',
    name: 'Qwen 2.5 Coder 32B',
    provider: 'ollama',
    context: 32768,
  },
  {
    id: 'qwen2.5-coder:7b',
    name: 'Qwen 2.5 Coder 7B',
    provider: 'ollama',
    context: 8192,
  },
  {
    id: 'phi4',
    name: 'Phi-4',
    provider: 'ollama',
  },
  {
    id: 'codellama-leon',
    name: 'CodeLlama Leon',
    provider: 'ollama',
  },
  {
    id: 'llama3.2-leon',
    name: 'Llama 3.2 Leon',
    provider: 'ollama',
  },
  {
    id: 'codellama',
    name: 'CodeLlama',
    provider: 'ollama',
  },
  {
    id: 'dolphincoder',
    name: 'DolphinCoder',
    provider: 'ollama',
  },
  {
    id: 'wizardcoder',
    name: 'WizardCoder',
    provider: 'ollama',
  },
];

export default models;
