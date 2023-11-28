# API Reference <a name="API Reference" id="api-reference"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DatadogMonitoring <a name="DatadogMonitoring" id="datadog-database-monitoring.DatadogMonitoring"></a>

#### Initializers <a name="Initializers" id="datadog-database-monitoring.DatadogMonitoring.Initializer"></a>

```typescript
import { DatadogMonitoring } from 'datadog-database-monitoring'

new DatadogMonitoring(scope: Construct, id: string, database: string, password: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#datadog-database-monitoring.DatadogMonitoring.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#datadog-database-monitoring.DatadogMonitoring.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#datadog-database-monitoring.DatadogMonitoring.Initializer.parameter.database">database</a></code> | <code>string</code> | *No description.* |
| <code><a href="#datadog-database-monitoring.DatadogMonitoring.Initializer.parameter.password">password</a></code> | <code>string</code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="datadog-database-monitoring.DatadogMonitoring.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="datadog-database-monitoring.DatadogMonitoring.Initializer.parameter.id"></a>

- *Type:* string

---

##### `database`<sup>Required</sup> <a name="database" id="datadog-database-monitoring.DatadogMonitoring.Initializer.parameter.database"></a>

- *Type:* string

---

##### `password`<sup>Required</sup> <a name="password" id="datadog-database-monitoring.DatadogMonitoring.Initializer.parameter.password"></a>

- *Type:* string

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#datadog-database-monitoring.DatadogMonitoring.toString">toString</a></code> | Returns a string representation of this construct. |

---

##### `toString` <a name="toString" id="datadog-database-monitoring.DatadogMonitoring.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#datadog-database-monitoring.DatadogMonitoring.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### `isConstruct` <a name="isConstruct" id="datadog-database-monitoring.DatadogMonitoring.isConstruct"></a>

```typescript
import { DatadogMonitoring } from 'datadog-database-monitoring'

DatadogMonitoring.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="datadog-database-monitoring.DatadogMonitoring.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#datadog-database-monitoring.DatadogMonitoring.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#datadog-database-monitoring.DatadogMonitoring.property.role">role</a></code> | <code>@cdktf/provider-postgresql.role.Role</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="datadog-database-monitoring.DatadogMonitoring.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `role`<sup>Required</sup> <a name="role" id="datadog-database-monitoring.DatadogMonitoring.property.role"></a>

```typescript
public readonly role: Role;
```

- *Type:* @cdktf/provider-postgresql.role.Role

---





