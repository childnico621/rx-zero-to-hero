---
name: gitflow
description: >-
  Guía y flujo de trabajo Gitflow para este repositorio (rx-zero-to-hero).
  Úsala al crear ramas, resolver alertas de Dependabot, preparar releases,
  aplicar hotfixes o hacer merge de cambios siguiendo la convención de ramas y commits.
---

# Flujo de trabajo Gitflow para `rx-zero-to-hero`

Este repositorio sigue un modelo **Gitflow** adaptado a `main` como rama principal de producción.

## Ramas principales

- **`main`**: Código estable y listo para producción. Nunca hagas commits directos aquí; solo recibe merges desde `release/*` o `hotfix/*` (o PRs aprobados).
- **`develop`**: Rama de integración para el próximo release. Si no existe aún en el remoto, créala a partir de `main` (`git checkout -b develop main && git push -u origin develop`).

## Ramas de soporte

| Tipo | Prefijo | Nace de | Se fusiona en | Uso |
| :--- | :--- | :--- | :--- | :--- |
| **Feature** | `feature/<nombre>` | `develop` | `develop` | Nuevas funcionalidades o ejercicios. |
| **Bugfix** | `fix/<nombre>` | `develop` | `develop` | Corrección de errores no críticos. |
| **Chore / Deps** | `chore/<nombre>` | `develop` | `develop` | Actualizaciones de dependencias (ej. alertas de Dependabot), configuración o mantenimiento. |
| **Release** | `release/<versión>` | `develop` | `main` y `develop` | Preparación de una nueva versión (bumps de versión, docs finales). |
| **Hotfix** | `hotfix/<nombre>` | `main` | `main` y `develop` | Correcciones urgentes en producción (incluidas alertas críticas de seguridad). |

## Convención de commits

Usa **Conventional Commits** en inglés o español de forma consistente (como en el historial del repo):
- `feat: ...` — Nueva funcionalidad
- `fix: ...` — Corrección de bug
- `chore(deps): ...` / `build: ...` — Actualización de dependencias o build (ideal para Dependabot)
- `docs: ...` — Documentación
- `refactor: ...` — Refactorización sin cambio de comportamiento

## Flujo paso a paso

### 1. Nueva tarea, feature o alerta de Dependabot (no crítica)
```bash
git checkout develop
git pull origin develop
git checkout -b chore/dependabot-alerts   # o feature/<nombre>, fix/<nombre>
# ... realizar cambios y verificar build/tests ...
git add .
git commit -m "chore(deps): resolve dependabot security alerts"
git push -u origin chore/dependabot-alerts
```
Luego abre un Pull Request hacia `develop` y elimina la rama tras el merge.

### 2. Hotfix urgente en producción (`main`)
```bash
git checkout main
git pull origin main
git checkout -b hotfix/<nombre>
# ... aplicar corrección y verificar ...
git commit -m "fix: <descripción del hotfix>"
```
Fusionar en `main` (con tag si aplica) **y** en `develop` para mantener ambas sincronizadas.

### 3. Preparar un Release
```bash
git checkout develop
git pull origin develop
git checkout -b release/vX.Y.Z
# ... actualizar versión en package.json / package-lock.json si aplica ...
git commit -m "chore(release): prepare vX.Y.Z"
```
Fusionar `release/vX.Y.Z` en `main` (crear tag `vX.Y.Z`) y también en `develop`.
