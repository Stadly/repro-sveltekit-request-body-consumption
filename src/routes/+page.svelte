<script lang="ts">
  const getData = () => {
    const formData = new FormData();
    formData.append("data", new Blob([new Uint8Array(1024 * 1024)]));
    return formData;
  };

  const postRequest = async () => {
    await fetch("/post", { method: "POST", body: getData() }).catch(() => {
      // Ignore errors
    });
  };

  const errorRequest = async () => {
    await fetch("/error", { method: "POST", body: getData() }).catch(() => {
      // Ignore errors
    });
  };

  const consumeAndErrorRequest = async () => {
    await fetch("/consume-and-error", {
      method: "POST",
      body: getData(),
    }).catch(() => {
      // Ignore errors
    });
  };

  const now = Date.now();
  let startTime = $state(now);
  let endTime = $state(now);
</script>

<button
  onclick={async () => {
    await errorRequest();
    startTime = Date.now();
    endTime = startTime;
    await postRequest();
    endTime = Date.now();
  }}
>
  error
</button>

<button
  onclick={async () => {
    await consumeAndErrorRequest();
    startTime = Date.now();
    endTime = startTime;
    await postRequest();
    endTime = Date.now();
  }}
>
  consume and error
</button>

<p>Time taken for post request: {endTime - startTime} ms</p>
