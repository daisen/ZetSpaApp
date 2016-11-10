<template>
    <div class="content">
        <div class="container-fluid">
            <div class="table-responsive">
<table class="table table-bordered">
    <thead>
      <tr>
        <th>#</th>
        <th>描述</th>
        <th>Payment Taken</th>
        <th>Status</th>
      </tr>
    </thead>
    <tbody>
      <tr class="success">
        <td>1</td>
        <td>表示成功或积极的行为。</td>
        <td>01/04/2012</td>
        <td>Approved</td>
      </tr>
      <tr class="danger">
        <td>2</td>
        <td>表示一个危险或存有潜在危险的行为。</td>
        <td>02/04/2012</td>
        <td>Declined</td>
      </tr>
      <tr class="warning">
        <td>3</td>
        <td>表示警告，可能需要注意。</td>
        <td>03/04/2012</td>
        <td>Pending</td>
      </tr>
      <tr class="active">
        <td>4</td>
        <td>标记为激活行。</td>
        <td>04/04/2012</td>
        <td>Call in to confirm</td>
      </tr>
    </tbody>
  </table>
            </div>
        </div>
    </div>
</template>
<script>
    export default {}
</script>