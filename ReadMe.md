# Serverless Direct S3 File Upload


## Usage

### Getting Upload URL
```
curl -X POST  -H "Content-Type: application/x-www-form-urlencoded"  https://dst0smadj7.execute-api.ap-northeast-2.amazonaws.com/dev/voices -d "name=hello_world.mp3"


{"uploadURL":"https://aulab-voice-bucket.s3.ap-northeast-2.amazonaws.com/hello_world.mp3?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=ASIA4B6CRKJZDGYPZ7N3%2F20211214%2Fap-northeast-2%2Fs3%2Faws4_request&X-Amz-Date=20211214T161539Z&X-Amz-Expires=900&X-Amz-Security-Token=xxx&X-Amz-Signature=56f902bc527a64efb2b01f40b2cf3806588de7dc133de6ed8364287b52deea7d&X-Amz-SignedHeaders=host%3Bx-amz-acl&x-amz-acl=public-read"}
```


### Uploading file
```
# curl -v -H 'Content-Type: audio/mpeg' -T ./hello_world.mp3 https://[bucket].s3.ap-northeast-2.amazonaws.com/hello_world.mp3?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=ASIA4B6CRKJZE2PYSHPB%2F20211214%2Fap-northeast-2%2Fs3%2Faws4_request&X-Amz-Date=20211214T162750Z&X-Amz-Expires=900&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaDmFwLW5vcnRoZWFzdC0yIkcwRQIgaSAmEXl9U5D0T%2FUcbRBSBAJ%2FmMhYdsJbmHosYLsbLRwCIQC7qnTdPro7R86FdeUsHKJJXe1znEOnU7wKDNjkXN5RwyqbAghiEAAaDDgyODc5OTc5OTkyMiIMEZFK5AL%2FKoV8%2FES5KvgBFFtbtQXVL01ZeW9cyjMZEoE01wlXp%2FY0Ufs39lqvW2WGcqarMJX1ufYaaPnWb5ZhYJErBmnPJ5ldMgmiMDSlyPXt0UpWnj2vr%2F%2FuuXUL70FVGqNSvEkWesiYHVi2ZnhfqYrHQ7rRAGhqezICIHIS3YtX7JGV7Eh02buPmlMz4V2df8aoOuP0r0lN%2BotMVY62LYJ0Pb3vmfkDzOl9F7IcWaRDkrSwZlpYEkJDpP6dLRsF7ZIDSNU2qFx1CWdUI4%2FtBRBPPUh1uL02ocld5whSANBY4kFNn0EqjFlV5oYJtkQ1JIJyTkMeq2CumSo0xBZJbvkMpz0eQCAwwYnjjQY6mgHCk9RkwFbbKtWHrYnM%2BjEZyaVXnvpZ1%2FlWk4DlWNMDNjX6KuN7c8yDYe4Ibqb5RCkkKJQcOluEZuk6sLC1djUthdQXyk5nTbbmgvobqgoe6RR82iwB6txOxgEdVYAjgslmnWzW48XPj8yEz%2FpatVWPSuItS78Eb7i073baqJOLWnedsOBGrBA9j%2B9pY6DDDu8M0zkgkojxKqvQ&X-Amz-Signature=631ce2f0ad0566d3ed63bf363eec0f6e1eec5349a446136a14317d227eb1ef56&X-Amz-SignedHeaders=host%3Bx-amz-acl&x-amz-acl=public-read
```


## Reference
- [DynamoDB](https://www.serverless.com/blog/node-rest-api-with-serverless-lambda-and-dynamodb)
