#!/usr/bin/env bash
yarn eslint-lint

eslint_exit=$?

if [ ${eslint_exit} -eq 0 ]; then
  echo "✓ ESLint passed"
else
  echo "✘ ESLint failed!" 1>&2
  exit ${eslint_exit}
fi

