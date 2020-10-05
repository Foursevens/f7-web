#!/usr/bin/env bash

set -e

aws cloudformation deploy \
  --capabilities CAPABILITY_NAMED_IAM \
  --parameter-overrides \
      Environment=$F7_WEB_ENV \
  --stack-name f7-web-$F7_WEB_ENV \
  --template-file ./cloudformation/stack.yml
